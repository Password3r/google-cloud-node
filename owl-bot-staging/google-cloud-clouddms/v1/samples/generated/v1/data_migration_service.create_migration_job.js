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

function main(parent, migrationJobId, migrationJob) {
  // [START datamigration_v1_generated_DataMigrationService_CreateMigrationJob_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent which owns this collection of migration jobs.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the instance to create.
   */
  // const migrationJobId = 'abc123'
  /**
   *  Required. Represents a migration
   *  job (https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.migrationJobs)
   *  object.
   */
  // const migrationJob = {}
  /**
   *  Optional. A unique ID used to identify the request. If the server receives
   *  two requests with the same ID, then the second request is ignored.
   *  It is recommended to always set this value to a UUID.
   *  The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores
   *  (_), and hyphens (-). The maximum length is 40 characters.
   */
  // const requestId = 'abc123'

  // Imports the Clouddms library
  const {DataMigrationServiceClient} = require('@google-cloud/dms').v1;

  // Instantiates a client
  const clouddmsClient = new DataMigrationServiceClient();

  async function callCreateMigrationJob() {
    // Construct request
    const request = {
      parent,
      migrationJobId,
      migrationJob,
    };

    // Run request
    const [operation] = await clouddmsClient.createMigrationJob(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateMigrationJob();
  // [END datamigration_v1_generated_DataMigrationService_CreateMigrationJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));