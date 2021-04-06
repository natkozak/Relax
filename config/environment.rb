# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

#change snake_case ruby keys to camelCase in jbuilder for json
Jbuilder.key_format camelize: :lower 