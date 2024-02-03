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
  // [START datalabeling_v1beta1_generated_DataLabelingService_SearchExampleComparisons_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the Evaluation google.cloud.datalabeling.v1beta1.Evaluation  resource to search for example
   *  comparisons from. Format:
   *  "projects/<var>{project_id}</var>/datasets/<var>{dataset_id}</var>/evaluations/<var>{evaluation_id}</var>"
   */
  // const parent = 'abc123'
  /**
   *  Optional. Requested page size. Server may return fewer results than
   *  requested. Default value is 100.
   */
  // const pageSize = 1234
  /**
   *  Optional. A token identifying a page of results for the server to return.
   *  Typically obtained by the
   *  nextPageToken SearchExampleComparisons.next_page_token  of the response
   *  to a previous search rquest.
   *  If you don't specify this field, the API call requests the first page of
   *  the search.
   */
  // const pageToken = 'abc123'

  // Imports the Datalabeling library
  const {DataLabelingServiceClient} = require('@google-cloud/datalabeling').v1beta1;

  // Instantiates a client
  const datalabelingClient = new DataLabelingServiceClient();

  async function callSearchExampleComparisons() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = datalabelingClient.searchExampleComparisonsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchExampleComparisons();
  // [END datalabeling_v1beta1_generated_DataLabelingService_SearchExampleComparisons_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
