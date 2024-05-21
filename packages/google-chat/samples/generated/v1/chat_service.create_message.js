// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, message) {
  // [START chat_v1_generated_ChatService_CreateMessage_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the space in which to create a message.
   *  Format: `spaces/{space}`
   */
  // const parent = 'abc123'
  /**
   *  Required. Message body.
   */
  // const message = {}
  /**
   *  Optional. A unique request ID for this message. Specifying an existing
   *  request ID returns the message created with that ID instead of creating a
   *  new message.
   */
  // const requestId = 'abc123'
  /**
   *  Optional. Specifies whether a message starts a thread or replies to one.
   *  Only supported in named spaces.
   */
  // const messageReplyOption = {}
  /**
   *  Optional. A custom ID for a message. Lets Chat apps get, update, or delete
   *  a message without needing to store the system-assigned ID in the message's
   *  resource name (represented in the message `name` field).
   *  The value for this field must meet the following requirements:
   *  * Begins with `client-`. For example, `client-custom-name` is a valid
   *    custom ID, but `custom-name` is not.
   *  * Contains up to 63 characters and only lowercase letters, numbers, and
   *    hyphens.
   *  * Is unique within a space. A Chat app can't use the same custom ID for
   *  different messages.
   *  For details, see Name a
   *  message (https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
   */
  // const messageId = 'abc123'

  // Imports the Chat library
  const {ChatServiceClient} = require('@google-apps/chat').v1;

  // Instantiates a client
  const chatClient = new ChatServiceClient();

  async function callCreateMessage() {
    // Construct request
    const request = {
      parent,
      message,
    };

    // Run request
    const response = await chatClient.createMessage(request);
    console.log(response);
  }

  callCreateMessage();
  // [END chat_v1_generated_ChatService_CreateMessage_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
