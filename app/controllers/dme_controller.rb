class DmeController < ApplicationController

  # Show all domains -> GET domains
  def show_domains
    dme.show_domains
  end

  # Create a domain
  def create_domain
    dme.create_domain(params[:domain])
  end

  # Create most record types
  def create_record(domain, key, record_type, value, option)
    dme.create_record(domain, key, record_type, value, option)
  end

  # Create an MX record
  def create_mx_record(domain, key, priority, value, options)
    dme.create_mx_record(domain, key, priority, value, options)
  end

  # Creates the default ANAME and CNAME records for all zones
  def create_default_records(mx_type)
    create_record(params[:domain], '', 'ANAME', 'www', {})
    create_record(params[:domain], 'www', 'CNAME', 'lb.moxiworks.com', {})
  end

  # Creates Google MX and CNAME records 
  def create_gmail_records
    create_mx_record(params[:domain], '', '1', 'aspmx.l.google.com.', {} )
    create_mx_record(params[:domain], '', '5', 'alt1.aspmx.l.google.com.', {} )
    create_mx_record(params[:domain], '', '5', 'alt2.aspmx.l.google.com.', {} )
    create_mx_record(params[:domain], '', '10', 'aspmx2.l.google.com.', {} )
    create_mx_record(params[:domain], '', '10', 'aspmx3.l.google.com.', {} )

    create_record(params[:domain], 'calendar', 'CNAME', 'ghs.google.com.', {})
    create_record(params[:domain], 'docs', 'CNAME', 'ghs.google.com.', {})
    create_record(params[:domain], 'mail', 'CNAME', 'ghs.google.com.', {})
    create_record(params[:domain], 'start', 'CNAME', 'ghs.google.com.', {})
    create_record(params[:domain], 'www', 'CNAME', 'ghs.google.com.', {})
  end

  # Creates the agent zone in DME
  def create_zone
    #create_domain
    #create_default_records
    create_gmail_records
  end
end
