require 'rails_helper'

describe User do
  subject { user }

  # let!(:user) { create :user }

  it 'works' do
    user = User.create
    expect(user.is_a?(User)).to eq(true)
  end
end
