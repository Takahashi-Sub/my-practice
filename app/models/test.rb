class Test < ApplicationRecord
  # validates :text, presence: true

  mount_uploader :image, ImageUploader
end
