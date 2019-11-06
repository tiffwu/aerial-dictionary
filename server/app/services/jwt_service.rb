class JwtService
  class << self
    def encode(payload)
      JWT.encode(payload, secret, 'HS256')
    end

    def decode(token)
      body, = JWT.decode(token, secret, true, algorithm: 'HS256')
      HashWithIndifferentAccess.new(body)
    rescue JWT::ExpiredSignature
      # JSON Web Tokens have some reserved "claims" (keys) - one of those is the
      # exp claim. When that is set to a timestamp, and it is past that
      # timestamp, JWT will raise this exception. Return nil for now.
      nil
    end

    private

    def secret
      Rails.application.secrets.secret_key_base
    end
  end
end