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

function main(parent, federationId, federation) {
  // [START metastore_v1alpha_generated_DataprocMetastoreFederation_CreateFederation_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The relative resource name of the location in which to create a
   *  federation service, in the following form:
   *  `projects/{project_number}/locations/{location_id}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID of the metastore federation, which is used as the final
   *  component of the metastore federation's name.
   *  This value must be between 2 and 63 characters long inclusive, begin with a
   *  letter, end with a letter or number, and consist of alpha-numeric
   *  ASCII characters or hyphens.
   */
  // const federationId = 'abc123'
  /**
   *  Required. The Metastore Federation to create. The `name` field is
   *  ignored. The ID of the created metastore federation must be
   *  provided in the request's `federation_id` field.
   */
  // const federation = {}
  /**
   *  Optional. A request ID. Specify a unique request ID to allow the server to
   *  ignore the request if it has completed. The server will ignore subsequent
   *  requests that provide a duplicate request ID for at least 60 minutes after
   *  the first request.
   *  For example, if an initial request times out, followed by another request
   *  with the same request ID, the server ignores the second request to prevent
   *  the creation of duplicate commitments.
   *  The request ID must be a valid
   *  UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format)
   *  A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.
   */
  // const requestId = 'abc123'

  // Imports the Metastore library
  const {DataprocMetastoreFederationClient} = require('@google-cloud/dataproc-metastore').v1alpha;

  // Instantiates a client
  const metastoreClient = new DataprocMetastoreFederationClient();

  async function callCreateFederation() {
    // Construct request
    const request = {
      parent,
      federationId,
      federation,
    };

    // Run request
    const [operation] = await metastoreClient.createFederation(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateFederation();
  // [END metastore_v1alpha_generated_DataprocMetastoreFederation_CreateFederation_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
