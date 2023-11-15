// Copyright 2023 Google LLC
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

function main(parent) {
  // [START cloudsupport_v2_generated_CommentService_ListComments_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of Case object for which comments should be
   *  listed.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of comments fetched with each request. Defaults to 10.
   */
  // const pageSize = 1234
  /**
   *  A token identifying the page of results to return. If unspecified, the
   *  first page is retrieved.
   */
  // const pageToken = 'abc123'

  // Imports the Support library
  const {CommentServiceClient} = require('@google-cloud/support').v2;

  // Instantiates a client
  const supportClient = new CommentServiceClient();

  async function callListComments() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await supportClient.listCommentsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListComments();
  // [END cloudsupport_v2_generated_CommentService_ListComments_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
