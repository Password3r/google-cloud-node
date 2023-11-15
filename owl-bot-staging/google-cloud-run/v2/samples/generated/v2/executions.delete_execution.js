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

function main(name) {
  // [START run_v2_generated_Executions_DeleteExecution_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the Execution to delete.
   *  Format:
   *  `projects/{project}/locations/{location}/jobs/{job}/executions/{execution}`,
   *  where `{project}` can be project id or number.
   */
  // const name = 'abc123'
  /**
   *  Indicates that the request should be validated without actually
   *  deleting any resources.
   */
  // const validateOnly = true
  /**
   *  A system-generated fingerprint for this version of the resource.
   *  This may be used to detect modification conflict during updates.
   */
  // const etag = 'abc123'

  // Imports the Run library
  const {ExecutionsClient} = require('@google-cloud/run').v2;

  // Instantiates a client
  const runClient = new ExecutionsClient();

  async function callDeleteExecution() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await runClient.deleteExecution(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteExecution();
  // [END run_v2_generated_Executions_DeleteExecution_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
