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
  // [START secretmanager_v1_generated_SecretManagerService_ListSecretVersions_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the
   *  Secret google.cloud.secretmanager.v1.Secret  associated with the
   *  SecretVersions google.cloud.secretmanager.v1.SecretVersion  to list, in
   *  the format `projects/* /secrets/*` or `projects/* /locations/* /secrets/*`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of results to be returned in a single page. If
   *  set to 0, the server decides the number of results to return. If the
   *  number is greater than 25000, it is capped at 25000.
   */
  // const pageSize = 1234
  /**
   *  Optional. Pagination token, returned earlier via
   *  ListSecretVersionsResponse.next_page_token .
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Filter string, adhering to the rules in
   *  List-operation
   *  filtering (https://cloud.google.com/secret-manager/docs/filtering). List
   *  only secret versions matching the filter. If filter is empty, all secret
   *  versions are listed.
   */
  // const filter = 'abc123'

  // Imports the Secretmanager library
  const {SecretManagerServiceClient} = require('@google-cloud/secret-manager').v1;

  // Instantiates a client
  const secretmanagerClient = new SecretManagerServiceClient();

  async function callListSecretVersions() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = secretmanagerClient.listSecretVersionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListSecretVersions();
  // [END secretmanager_v1_generated_SecretManagerService_ListSecretVersions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
