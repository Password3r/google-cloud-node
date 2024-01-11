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
  // [START css_v1_generated_AccountsService_ListChildAccounts_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent account. Must be a CSS group or domain.
   *  Format: accounts/{account}
   */
  // const parent = 'abc123'
  /**
   *  If set, only the MC accounts with the given label ID will be returned.
   */
  // const labelId = 1234
  /**
   *  If set, only the MC accounts with the given name (case sensitive) will be
   *  returned.
   */
  // const fullName = 'abc123'
  /**
   *  Optional. The maximum number of accounts to return. The service may return
   *  fewer than this value. If unspecified, at most 50 accounts will be
   *  returned. The maximum value is 1000; values above 1000 will be coerced to
   *  1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. A page token, received from a previous `ListChildAccounts` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListChildAccounts` must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Css library
  const {AccountsServiceClient} = require('@google-shopping/css').v1;

  // Instantiates a client
  const cssClient = new AccountsServiceClient();

  async function callListChildAccounts() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await cssClient.listChildAccountsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListChildAccounts();
  // [END css_v1_generated_AccountsService_ListChildAccounts_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
