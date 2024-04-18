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
  // [START documentai_v1_generated_DocumentProcessorService_ListProcessorVersions_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent (project, location and processor) to list all versions.
   *  Format: `projects/{project}/locations/{location}/processors/{processor}`
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of processor versions to return.
   *  If unspecified, at most `10` processor versions will be returned.
   *  The maximum value is `20`. Values above `20` will be coerced to `20`.
   */
  // const pageSize = 1234
  /**
   *  We will return the processor versions sorted by creation time. The page
   *  token will point to the next processor version.
   */
  // const pageToken = 'abc123'

  // Imports the Documentai library
  const {DocumentProcessorServiceClient} = require('@google-cloud/documentai').v1;

  // Instantiates a client
  const documentaiClient = new DocumentProcessorServiceClient();

  async function callListProcessorVersions() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = documentaiClient.listProcessorVersionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListProcessorVersions();
  // [END documentai_v1_generated_DocumentProcessorService_ListProcessorVersions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
