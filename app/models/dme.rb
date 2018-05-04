class Dme < ApplicationRecord
  def initialize
    @api = DnsMadeEasy.new(Rails.application.secrets.api_key, Rails.application.secrets.secret_key, sandbox=TRUE)
  end

  # Shows a single domain
  def show_domain(domain)
    @api.domain(domain)
  rescue => e
    puts "Failed to retrieve data for #{domain}"
    Rails.logger.warn e.message
  end


  # Shows all domains
  def show_domains
    @api.domains
  rescue => e
    puts 'failed to return domains'
    Rails.logger.warn e.message
  end

  # Creates a domain
  def create_domain(domain)
    @api.create_domain(domain)
  rescue => e
    puts "Failed to create #{domain}"
    Rails.logger.warn e.message
  end

  # Deletes a domain
  def delete_domain(domain)
    @api.delete_domain(domain)
  rescue => e
    puts "Failed to delete #{domain}"
    Rails.logger.warn e.message
  end

  # Creates any kind of record
  def create_record(domain, key, record_type, value, ttl)
    @api.create_record(domain, key, record_type, value, ttl)
  rescue => e
    puts "failed to create #{record_type} record"
    Rails.logger.warn e.message
  end

  # Creates MX records
  def create_mx_record(domain, key, priority, value, options)
    @api.create_mx_record(domain, key, priority, value, options)
  rescue => e
    puts "failed to create #{value} record"
    Rails.logger.warn e.message
  end
end
