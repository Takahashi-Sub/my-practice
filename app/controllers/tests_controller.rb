class TestsController < ApplicationController
  def new
    @test = Test.new
    @tests = Test.all
  end

  def create
    @test = Test.create(post_params)
    redirect_to new_test_path
  end

  private
  def post_params
    params.require(:test).permit(:text, :image)
  end
end
