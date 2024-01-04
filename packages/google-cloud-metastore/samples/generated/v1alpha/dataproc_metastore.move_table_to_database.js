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

function main(service, tableName, dbName, destinationDbName) {
  // [START metastore_v1alpha_generated_DataprocMetastore_MoveTableToDatabase_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The relative resource name of the metastore service to mutate
   *  metadata, in the following format:
   *  `projects/{project_id}/locations/{location_id}/services/{service_id}`.
   */
  // const service = 'abc123'
  /**
   *  Required. The name of the table to be moved.
   */
  // const tableName = 'abc123'
  /**
   *  Required. The name of the database where the table resides.
   */
  // const dbName = 'abc123'
  /**
   *  Required. The name of the database where the table should be moved.
   */
  // const destinationDbName = 'abc123'

  // Imports the Metastore library
  const {DataprocMetastoreClient} = require('@google-cloud/dataproc-metastore').v1alpha;

  // Instantiates a client
  const metastoreClient = new DataprocMetastoreClient();

  async function callMoveTableToDatabase() {
    // Construct request
    const request = {
      service,
      tableName,
      dbName,
      destinationDbName,
    };

    // Run request
    const [operation] = await metastoreClient.moveTableToDatabase(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callMoveTableToDatabase();
  // [END metastore_v1alpha_generated_DataprocMetastore_MoveTableToDatabase_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
