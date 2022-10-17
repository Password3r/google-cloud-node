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

function main(parent, documentLink) {
  // [START contentwarehouse_v1_generated_DocumentLinkService_CreateDocumentLink_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Parent of the document-link to be created.
   *  parent of document-link should be a document.
   *  Format:
   *  projects/{project_number}/locations/{location}/documents/{source_document_id}.
   */
  // const parent = 'abc123'
  /**
   *  Required. Document links associated with the source documents (source_document_id).
   */
  // const documentLink = {}
  /**
   *  The meta information collected about the document creator, used to enforce
   *  access control for the service.
   */
  // const requestMetadata = {}

  // Imports the Contentwarehouse library
  const {DocumentLinkServiceClient} = require('@google-cloud/contentwarehouse').v1;

  // Instantiates a client
  const contentwarehouseClient = new DocumentLinkServiceClient();

  async function callCreateDocumentLink() {
    // Construct request
    const request = {
      parent,
      documentLink,
    };

    // Run request
    const response = await contentwarehouseClient.createDocumentLink(request);
    console.log(response);
  }

  callCreateDocumentLink();
  // [END contentwarehouse_v1_generated_DocumentLinkService_CreateDocumentLink_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
