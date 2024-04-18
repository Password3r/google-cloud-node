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

function main(name) {
  // [START documentai_v1_generated_DocumentProcessorService_BatchProcessDocuments_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of Processor google.cloud.documentai.v1.Processor  or
   *  ProcessorVersion google.cloud.documentai.v1.ProcessorVersion.
   *  Format: `projects/{project}/locations/{location}/processors/{processor}`,
   *  or
   *  `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`
   */
  // const name = 'abc123'
  /**
   *  The input documents for the
   *  BatchProcessDocuments google.cloud.documentai.v1.DocumentProcessorService.BatchProcessDocuments 
   *  method.
   */
  // const inputDocuments = {}
  /**
   *  The output configuration for the
   *  BatchProcessDocuments google.cloud.documentai.v1.DocumentProcessorService.BatchProcessDocuments 
   *  method.
   */
  // const documentOutputConfig = {}
  /**
   *  Whether human review should be skipped for this request. Default to
   *  `false`.
   */
  // const skipHumanReview = true
  /**
   *  Inference-time options for the process API
   */
  // const processOptions = {}
  /**
   *  Optional. The labels with user-defined metadata for the request.
   *  Label keys and values can be no longer than 63 characters
   *  (Unicode codepoints) and can only contain lowercase letters, numeric
   *  characters, underscores, and dashes. International characters are allowed.
   *  Label values are optional. Label keys must start with a letter.
   */
  // const labels = [1,2,3,4]

  // Imports the Documentai library
  const {DocumentProcessorServiceClient} = require('@google-cloud/documentai').v1;

  // Instantiates a client
  const documentaiClient = new DocumentProcessorServiceClient();

  async function callBatchProcessDocuments() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await documentaiClient.batchProcessDocuments(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBatchProcessDocuments();
  // [END documentai_v1_generated_DocumentProcessorService_BatchProcessDocuments_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
