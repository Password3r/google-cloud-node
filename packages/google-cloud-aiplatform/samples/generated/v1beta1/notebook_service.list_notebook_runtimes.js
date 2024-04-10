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
  // [START aiplatform_v1beta1_generated_NotebookService_ListNotebookRuntimes_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location from which to list the
   *  NotebookRuntimes.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  Optional. An expression for filtering the results of the request. For field
   *  names both snake_case and camelCase are supported.
   *    * `notebookRuntime` supports = and !=. `notebookRuntime` represents the
   *      NotebookRuntime ID,
   *      i.e. the last segment of the NotebookRuntime's resource name 
   *      google.cloud.aiplatform.v1beta1.NotebookRuntime.name.
   *    * `displayName` supports = and != and regex.
   *    * `notebookRuntimeTemplate` supports = and !=. `notebookRuntimeTemplate`
   *      represents the NotebookRuntimeTemplate ID,
   *      i.e. the last segment of the NotebookRuntimeTemplate's resource name 
   *      google.cloud.aiplatform.v1beta1.NotebookRuntimeTemplate.name.
   *    * `healthState` supports = and !=. healthState enum: HEALTHY, UNHEALTHY,
   *    HEALTH_STATE_UNSPECIFIED.
   *    * `runtimeState` supports = and !=. runtimeState enum:
   *    RUNTIME_STATE_UNSPECIFIED, RUNNING, BEING_STARTED, BEING_STOPPED,
   *    STOPPED, BEING_UPGRADED, ERROR, INVALID.
   *    * `runtimeUser` supports = and !=.
   *    * API version is UI only: `uiState` supports = and !=. uiState enum:
   *    UI_RESOURCE_STATE_UNSPECIFIED, UI_RESOURCE_STATE_BEING_CREATED,
   *    UI_RESOURCE_STATE_ACTIVE, UI_RESOURCE_STATE_BEING_DELETED,
   *    UI_RESOURCE_STATE_CREATION_FAILED.
   *    * `notebookRuntimeType` supports = and !=. notebookRuntimeType enum:
   *    USER_DEFINED, ONE_CLICK.
   *  Some examples:
   *    * `notebookRuntime="notebookRuntime123"`
   *    * `displayName="myDisplayName"` and `displayName=~"myDisplayNameRegex"`
   *    * `notebookRuntimeTemplate="notebookRuntimeTemplate321"`
   *    * `healthState=HEALTHY`
   *    * `runtimeState=RUNNING`
   *    * `runtimeUser="test@google.com"`
   *    * `uiState=UI_RESOURCE_STATE_BEING_DELETED`
   *    * `notebookRuntimeType=USER_DEFINED`
   */
  // const filter = 'abc123'
  /**
   *  Optional. The standard list page size.
   */
  // const pageSize = 1234
  /**
   *  Optional. The standard list page token.
   *  Typically obtained via
   *  ListNotebookRuntimesResponse.next_page_token google.cloud.aiplatform.v1beta1.ListNotebookRuntimesResponse.next_page_token 
   *  of the previous
   *  NotebookService.ListNotebookRuntimes google.cloud.aiplatform.v1beta1.NotebookService.ListNotebookRuntimes 
   *  call.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Mask specifying which fields to read.
   */
  // const readMask = {}
  /**
   *  Optional. A comma-separated list of fields to order by, sorted in ascending
   *  order. Use "desc" after a field name for descending. Supported fields:
   *    * `display_name`
   *    * `create_time`
   *    * `update_time`
   *  Example: `display_name, create_time desc`.
   */
  // const orderBy = 'abc123'

  // Imports the Aiplatform library
  const {NotebookServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new NotebookServiceClient();

  async function callListNotebookRuntimes() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = aiplatformClient.listNotebookRuntimesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListNotebookRuntimes();
  // [END aiplatform_v1beta1_generated_NotebookService_ListNotebookRuntimes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
