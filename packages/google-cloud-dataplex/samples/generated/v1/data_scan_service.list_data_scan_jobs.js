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
  // [START dataplex_v1_generated_DataScanService_ListDataScanJobs_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the parent environment:
   *  `projects/{project}/locations/{location_id}/dataScans/{data_scan_id}`
   *  where `project` refers to a *project_id* or *project_number* and
   *  `location_id` refers to a GCP region.
   */
  // const parent = 'abc123'
  /**
   *  Optional. Maximum number of DataScanJobs to return. The service may return
   *  fewer than this value. If unspecified, at most 10 DataScanJobs will be
   *  returned. The maximum value is 1000; values above 1000 will be coerced to
   *  1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. Page token received from a previous `ListDataScanJobs` call.
   *  Provide this to retrieve the subsequent page. When paginating, all other
   *  parameters provided to `ListDataScanJobs` must match the call that provided
   *  the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. An expression for filtering the results of the ListDataScanJobs
   *  request.
   *  If unspecified, all datascan jobs will be returned. Multiple filters can be
   *  applied (with `AND`, `OR` logical operators). Filters are case-sensitive.
   *  Allowed fields are:
   *  - `start_time`
   *  - `end_time`
   *  `start_time` and `end_time` expect RFC-3339 formatted strings (e.g.
   *  2018-10-08T18:30:00-07:00).
   *  For instance, 'start_time > 2018-10-08T00:00:00.123456789Z AND end_time <
   *  2018-10-09T00:00:00.123456789Z' limits results to DataScanJobs between
   *  specified start and end times.
   */
  // const filter = 'abc123'

  // Imports the Dataplex library
  const {DataScanServiceClient} = require('@google-cloud/dataplex').v1;

  // Instantiates a client
  const dataplexClient = new DataScanServiceClient();

  async function callListDataScanJobs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = dataplexClient.listDataScanJobsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListDataScanJobs();
  // [END dataplex_v1_generated_DataScanService_ListDataScanJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
