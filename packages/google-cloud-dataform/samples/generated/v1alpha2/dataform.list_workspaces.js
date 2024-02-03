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
  // [START dataform_v1alpha2_generated_Dataform_ListWorkspaces_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The repository in which to list workspaces. Must be in the
   *  format `projects/* /locations/* /repositories/*`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. Maximum number of workspaces to return. The server may return fewer
   *  items than requested. If unspecified, the server will pick an appropriate
   *  default.
   */
  // const pageSize = 1234
  /**
   *  Optional. Page token received from a previous `ListWorkspaces` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListWorkspaces`
   *  must match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. This field only supports ordering by `name`. If unspecified, the server
   *  will choose the ordering. If specified, the default order is ascending for
   *  the `name` field.
   */
  // const orderBy = 'abc123'
  /**
   *  Optional. Filter for the returned list.
   */
  // const filter = 'abc123'

  // Imports the Dataform library
  const {DataformClient} = require('@google-cloud/dataform').v1alpha2;

  // Instantiates a client
  const dataformClient = new DataformClient();

  async function callListWorkspaces() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = dataformClient.listWorkspacesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListWorkspaces();
  // [END dataform_v1alpha2_generated_Dataform_ListWorkspaces_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
