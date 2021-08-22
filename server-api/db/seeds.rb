# frozen_string_literal: true

Category.destroy_all
Product.destroy_all
Property.destroy_all
User.destroy_all

phones = Category.create(name: 'Phones')
laptops = Category.create(name: 'Laptops')

i_phone = Product.create(name: 'iPhone 12', price: 699, category_id: phones.id)
pixel = Product.create(name: 'Google Pixel 4', price: 449, category_id: phones.id)
macbook = Product.create(name: 'MacBook Pro 13 M1', price: 1299, category_id: laptops.id)
matebook = Product.create(name: 'Huawei Matebook 13', price: 999, category_id: laptops.id)

Property.create(name: 'Color', value: 'Blue', product_id: i_phone.id)
Property.create(name: 'Color', value: 'Black', product_id: pixel.id)
Property.create(name: 'Operating System', value: 'iOS', product_id: i_phone.id)
Property.create(name: 'Operating System', value: 'Android', product_id: pixel.id)
Property.create(name: 'Brand', value: 'Apple', product_id: i_phone.id)
Property.create(name: 'Brand', value: 'Google', product_id: pixel.id)
Property.create(name: 'Color', value: 'Silver', product_id: macbook.id)
Property.create(name: 'Color', value: 'Silver', product_id: matebook.id)
Property.create(name: 'Brand', value: 'Apple', product_id: macbook.id)
Property.create(name: 'Brand', value: 'Huawei', product_id: matebook.id)

User.create(first_name: 'Kirill', last_name: 'Kumma', email: 'kirill@kumma.com', password: '123123',
            password_confirmation: '123123')
User.create(first_name: 'Kirill', last_name: 'Puzanov', email: 'kirill@puzanov.com', password: '123123',
            password_confirmation: '123123')
