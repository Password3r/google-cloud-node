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
  // [START networkservices_v1_generated_NetworkServices_ListTcpRoutes_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and location from which the TcpRoutes should be
   *  listed, specified in the format `projects/* /locations/global`.
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of TcpRoutes to return per call.
   */
  // const pageSize = 1234
  /**
   *  The value returned by the last `ListTcpRoutesResponse`
   *  Indicates that this is a continuation of a prior `ListTcpRoutes` call,
   *  and that the system should return the next page of data.
   */
  // const pageToken = 'abc123'

  // Imports the Networkservices library
  const {NetworkServicesClient} = require('@google-cloud/networkservices').v1;

  // Instantiates a client
  const networkservicesClient = new NetworkServicesClient();

  async function callListTcpRoutes() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await networkservicesClient.listTcpRoutesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListTcpRoutes();
  // [END networkservices_v1_generated_NetworkServices_ListTcpRoutes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
