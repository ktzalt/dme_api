class Dme
  def initialize
    @api = DnsMadeEasy.new(Rails.application.secrets.api_key, Rails.application.secrets.secret_key, sandbox=TRUE)
  end

  def validate_domain(domain)
    domain_regex = /^[^-][a-z0-9-]+\.[a-z]+$/
    return false unless domain_regex.match(domain)
    true
  end

  def show_domains
    @api.domains
  rescue => e
    Rails.logger.warn e.message
    'failed to return domains'
  end

  def create_domain(domain)
    return unless validate_domain(domain)
    begin
      @api.create_domain(domain)
    rescue => e
      Rails.logger.warn e.message
      'failed to create domain'
    end
  end

  def create_record(domain, key, record_type, value, ttl)
    return unless validate_domain(domain)
    begin
      @api.create_record(domain, key, record_type, value, ttl)
    rescue => e
      Rails.logger.warn e.message
      "failed to create #{record_type} record"
    end
  end

  def create_mx_record(domain, key, priority, value, options)
    @api.create_mx_record(domain, key, priority, value, options)
  rescue => e
    Rails.logger.warn e.message
    "failed to create #{value} mx record"
  end

end
