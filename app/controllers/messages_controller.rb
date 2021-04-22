class MessagesController < ApplicationController
  before_action :require_user

  def create
    message = current_user.messages.build(message_params)
    if message.save
      # redirect_to root_path
      # ActionCable.server.broadcast("chatroom_channel", { new_message: message.body })
      ActionCable.server.broadcast("chatroom_channel", { partial: message_render(message) })
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end

  def message_render(message)
    render_to_string(partial: 'message', locals: { message: message})
  end
end
