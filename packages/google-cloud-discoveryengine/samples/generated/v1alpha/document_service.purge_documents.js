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

function main(parent, filter) {
  // [START discoveryengine_v1alpha_generated_DocumentService_PurgeDocuments_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Cloud Storage location for the input content.
   *  Supported `data_schema`:
   *  * `document_id`: One valid
   *  Document.id google.cloud.discoveryengine.v1alpha.Document.id  per line.
   */
  // const gcsSource = {}
  /**
   *  Required. The parent resource name, such as
   *  `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. Filter matching documents to purge. Only currently supported
   *  value is
   *  `*` (all items).
   */
  // const filter = 'abc123'
  /**
   *  The desired location of errors incurred during the purge.
   */
  // const errorConfig = {}
  /**
   *  Actually performs the purge. If `force` is set to false, return the
   *  expected purge count without deleting any documents.
   */
  // const force = true

  // Imports the Discoveryengine library
  const {DocumentServiceClient} = require('@google-cloud/discoveryengine').v1alpha;

  // Instantiates a client
  const discoveryengineClient = new DocumentServiceClient();

  async function callPurgeDocuments() {
    // Construct request
    const request = {
      parent,
      filter,
    };

    // Run request
    const [operation] = await discoveryengineClient.purgeDocuments(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callPurgeDocuments();
  // [END discoveryengine_v1alpha_generated_DocumentService_PurgeDocuments_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
