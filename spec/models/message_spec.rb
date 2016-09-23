require 'rails_helper'

RSpec.describe Message, type: :model do
  describe 'attributes' do

    it { should validate_presence_of(:body) }
    it { should respond_to(:user_id) }
    it { should respond_to(:conversation_id) }
    it { should belong_to(:user) }
  end
end
