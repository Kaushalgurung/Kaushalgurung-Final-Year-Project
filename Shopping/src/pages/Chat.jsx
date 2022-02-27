import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from './components';

import 'stream-chat-react/dist/css/index.css';
import './Chat.css';

const apiKey = '4wr5kcj5fwte';
const client = StreamChat.getInstance(apiKey);

const Chat = () => {
  return (
    <div className='app_wrapper'>
        <Chat client={client} theme="team light">
                <ChannelListContainer 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
                <ChannelContainer 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    createType={createType}
                />
            </Chat>
    </div>
  );
}

export default Chat;