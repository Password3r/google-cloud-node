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

function main(instance, rescheduleType) {
  // [START memcache_v1_generated_CloudMemcache_RescheduleMaintenance_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Memcache instance resource name using the form:
   *      `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
   *  where `location_id` refers to a GCP region.
   */
  // const instance = 'abc123'
  /**
   *  Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well.
   */
  // const rescheduleType = {}
  /**
   *  Timestamp when the maintenance shall be rescheduled to if
   *  reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for
   *  example `2012-11-15T16:19:00.094Z`.
   */
  // const scheduleTime = {}

  // Imports the Memcache library
  const {CloudMemcacheClient} = require('@google-cloud/memcache').v1;

  // Instantiates a client
  const memcacheClient = new CloudMemcacheClient();

  async function callRescheduleMaintenance() {
    // Construct request
    const request = {
      instance,
      rescheduleType,
    };

    // Run request
    const [operation] = await memcacheClient.rescheduleMaintenance(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callRescheduleMaintenance();
  // [END memcache_v1_generated_CloudMemcache_RescheduleMaintenance_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
