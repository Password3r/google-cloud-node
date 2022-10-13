// Copyright 2022 Google LLC
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

function main(parent, lakeId, lake) {
  // [START dataplex_v1_generated_DataplexService_CreateLake_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the lake location, of the form:
   *  projects/{project_number}/locations/{location_id}
   *  where `location_id` refers to a GCP region.
   */
  // const parent = 'abc123'
  /**
   *  Required. Lake identifier.
   *  This ID will be used to generate names such as database and dataset names
   *  when publishing metadata to Hive Metastore and BigQuery.
   *  * Must contain only lowercase letters, numbers and hyphens.
   *  * Must start with a letter.
   *  * Must end with a number or a letter.
   *  * Must be between 1-63 characters.
   *  * Must be unique within the customer project / location.
   */
  // const lakeId = 'abc123'
  /**
   *  Required. Lake resource
   */
  // const lake = {}
  /**
   *  Optional. Only validate the request, but do not perform mutations.
   *  The default is false.
   */
  // const validateOnly = true

  // Imports the Dataplex library
  const {DataplexServiceClient} = require('@google-cloud/dataplex').v1;

  // Instantiates a client
  const dataplexClient = new DataplexServiceClient();

  async function callCreateLake() {
    // Construct request
    const request = {
      parent,
      lakeId,
      lake,
    };

    // Run request
    const [operation] = await dataplexClient.createLake(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateLake();
  // [END dataplex_v1_generated_DataplexService_CreateLake_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
