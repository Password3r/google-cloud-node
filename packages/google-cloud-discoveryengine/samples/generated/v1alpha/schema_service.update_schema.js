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

function main(schema) {
  // [START discoveryengine_v1alpha_generated_SchemaService_UpdateSchema_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Schema google.cloud.discoveryengine.v1alpha.Schema  to
   *  update.
   */
  // const schema = {}
  /**
   *  If set to true, and the
   *  Schema google.cloud.discoveryengine.v1alpha.Schema  is not found, a new
   *  Schema google.cloud.discoveryengine.v1alpha.Schema  will be created. In
   *  this situation, `update_mask` is ignored.
   */
  // const allowMissing = true

  // Imports the Discoveryengine library
  const {SchemaServiceClient} = require('@google-cloud/discoveryengine').v1alpha;

  // Instantiates a client
  const discoveryengineClient = new SchemaServiceClient();

  async function callUpdateSchema() {
    // Construct request
    const request = {
      schema,
    };

    // Run request
    const [operation] = await discoveryengineClient.updateSchema(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateSchema();
  // [END discoveryengine_v1alpha_generated_SchemaService_UpdateSchema_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
