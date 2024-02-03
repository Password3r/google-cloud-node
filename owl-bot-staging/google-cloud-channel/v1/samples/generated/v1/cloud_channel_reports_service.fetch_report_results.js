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

function main(reportJob) {
  // [START cloudchannel_v1_generated_CloudChannelReportsService_FetchReportResults_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The report job created by
   *  CloudChannelReportsService.RunReportJob google.cloud.channel.v1.CloudChannelReportsService.RunReportJob.
   *  Report_job uses the format:
   *  accounts/{account_id}/reportJobs/{report_job_id}
   */
  // const reportJob = 'abc123'
  /**
   *  Optional. Requested page size of the report. The server may return fewer
   *  results than requested. If you don't specify a page size, the server uses a
   *  sensible default (may change over time).
   *  The maximum value is 30,000; the server will change larger values to
   *  30,000.
   */
  // const pageSize = 1234
  /**
   *  Optional. A token that specifies a page of results beyond the first page.
   *  Obtained through
   *  FetchReportResultsResponse.next_page_token google.cloud.channel.v1.FetchReportResultsResponse.next_page_token 
   *  of the previous
   *  CloudChannelReportsService.FetchReportResults google.cloud.channel.v1.CloudChannelReportsService.FetchReportResults 
   *  call.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. List of keys specifying which report partitions to return.
   *  If empty, returns all partitions.
   */
  // const partitionKeys = ['abc','def']

  // Imports the Channel library
  const {CloudChannelReportsServiceClient} = require('@google-cloud/channel').v1;

  // Instantiates a client
  const channelClient = new CloudChannelReportsServiceClient();

  async function callFetchReportResults() {
    // Construct request
    const request = {
      reportJob,
    };

    // Run request
    const iterable = channelClient.fetchReportResultsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callFetchReportResults();
  // [END cloudchannel_v1_generated_CloudChannelReportsService_FetchReportResults_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));