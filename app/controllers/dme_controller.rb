class DmeController < ApplicationController

  # Validates inputted domain
  def validate_domain
    domain_regex = /^[^-][a-z0-9-]+\.[a-z]+$/
    return false unless domain_regex.match(params[:domain] )
    return true
  end

  # Validates inputted mx type
  def validate_mx_type
    mx_types = ['gmail', 'godaddy', 'networksolutions', 'none']
    return false unless mx_types.include?(params[:mx_type])
    return true
  end

  def validate_params
    if validate_domain == true && validate_mx_type == true
      puts 'params are valid'
      return true
    else 
      puts 'params are invalid'
      return false
    end
  end

  # Show all domains -> GET domains
  def show_domains
    render json: dme.show_domains
  end

  # Show a specific domain
  def show_domain
    render json: dme.show_domain(params[:domain])
  end

  # Create a domain
  def create_domain
    dme.create_domain(params[:domain])
  end

  # Creates Google MX and CNAME records 
  def create_gmail_records
    dme.create_mx_record(params[:domain], '', '1', 'aspmx.l.google.com.', {} )
    dme.create_mx_record(params[:domain], '', '5', 'alt1.aspmx.l.google.com.', {} )
    dme.create_mx_record(params[:domain], '', '5', 'alt2.aspmx.l.google.com.', {} )
    dme.create_mx_record(params[:domain], '', '10', 'aspmx2.l.google.com.', {} )
    dme.create_mx_record(params[:domain], '', '10', 'aspmx3.l.google.com.', {} )

    dme.create_record(params[:domain], 'calendar', 'CNAME', 'ghs.google.com.', {})
    dme.create_record(params[:domain], 'docs', 'CNAME', 'ghs.google.com.', {})
    dme.create_record(params[:domain], 'mail', 'CNAME', 'ghs.google.com.', {})
    dme.create_record(params[:domain], 'start', 'CNAME', 'ghs.google.com.', {})
    dme.create_record(params[:domain], 'www', 'CNAME', "#{params[:domain]}.", {})
  end

  #Creates GoDaddy MX and CNAME records
  def create_godaddy_records
    dme.create_mx_record(params[:domain], '', '0', 'smtp.secureserver.net.', {} )
    dme.create_mx_record(params[:domain], '', '5', 'mailstore1.secureserver.net.', {} )

    dme.create_record(params[:domain], 'email', 'CNAME', 'email.secureserver.net.', {})
    dme.create_record(params[:domain], 'imap', 'CNAME', 'imap.secureserver.net.', {})
    dme.create_record(params[:domain], 'mail', 'CNAME', 'pop.secureserver.net.', {})
    dme.create_record(params[:domain], 'mobilemail', 'CNAME', 'mobilemail-v01.prod.mesa1.secureserver.net.', {})
    dme.create_record(params[:domain], 'pda', 'CNAME', 'mobilemail-v01.prod.mesa1.secureserver.net.', {})
    dme.create_record(params[:domain], 'pop', 'CNAME', 'pop.secureserver.net.', {})
    dme.create_record(params[:domain], 'smtp', 'CNAME', 'smtp.secureserver.net.', {})
    dme.create_record(params[:domain], 'webmail', 'CNAME', 'webmail.secureserver.net.', {})
    dme.create_record(params[:domain], 'www', 'CNAME', "#{params[:domain]}.", {})
  end

  #Creates NetworkSolution MX and CNAME records
  def create_networksolutions_records
    dme.create_mx_record(params[:domain], '', '0', "inbound.#{params[:domain]}.netsolmail.net.", {} )

    dme.create_record(params[:domain], 'mail', 'CNAME', "mail.#{params[:domain]}.netsolmail.net.", {})
    dme.create_record(params[:domain], 'mail', 'CNAME', "smtp.#{params[:domain]}.netsolmail.net.", {})
    dme.create_record(params[:domain], 'www', 'CNAME', "#{params[:domain]}.", {})
  end

  # Creates the default ANAME and CNAME records for all zones
  def create_default_records
    dme.create_record(params[:domain], '', 'ANAME', 'www', {})
    dme.create_record(params[:domain], 'www', 'CNAME', 'lb.moxiworks.com', {})
  end

  # Determines which MX records to create
  def create_additional_records
    case params[:mx_type]
    when 'gmail'
      create_gmail_records
    when 'godaddy'
      create_godaddy_records
    when 'networksolutions'
      create_networksolutions_records
    when 'none'
      dme.create_record(params[:domain], 'www', 'CNAME', "#{params[:domain]}.", {})
    else
      return
    end
  end


  # Creates the agent zone in DME
  def create_zone
    return false unless validate_params
    create_domain
    create_default_records
    create_additional_records
    show_domain
  end

end
