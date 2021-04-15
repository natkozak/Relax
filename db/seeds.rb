# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create(email: 'demo@demo.com', password: '123456')

general = Channel.create({name: 'general', is_direct: false, is_private: false})
# random = Channel.create({name: 'random', is_direct: false, is_private: false})
# scratchpad = Channel.create(name: demo.full_name, is_direct: true, is_private: true)