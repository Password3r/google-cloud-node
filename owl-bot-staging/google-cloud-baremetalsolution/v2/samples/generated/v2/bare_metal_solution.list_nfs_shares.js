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

function main(parent) {
  // [START baremetalsolution_v2_generated_BareMetalSolution_ListNfsShares_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Parent value for ListNfsSharesRequest.
   */
  // const parent = 'abc123'
  /**
   *  Requested page size. The server might return fewer items than requested.
   *  If unspecified, server will pick an appropriate default.
   */
  // const pageSize = 1234
  /**
   *  A token identifying a page of results from the server.
   */
  // const pageToken = 'abc123'
  /**
   *  List filter.
   */
  // const filter = 'abc123'

  // Imports the Baremetalsolution library
  const {BareMetalSolutionClient} = require('@google-cloud/bare-metal-solution').v2;

  // Instantiates a client
  const baremetalsolutionClient = new BareMetalSolutionClient();

  async function callListNfsShares() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = baremetalsolutionClient.listNfsSharesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListNfsShares();
  // [END baremetalsolution_v2_generated_BareMetalSolution_ListNfsShares_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
