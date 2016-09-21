class Message < ApplicationRecord
  belongs_to :user, :conversation
end
