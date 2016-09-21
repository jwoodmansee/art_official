class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_one :profile, dependent: :destroy
  has_many :conversations, dependent: :destroy

  validates_presence_of :first_name
  validates_presence_of :last_name
  validates_presence_of :username
  
  validates_uniqueness_of :username

end
