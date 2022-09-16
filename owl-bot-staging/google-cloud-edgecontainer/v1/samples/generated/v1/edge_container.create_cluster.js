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

function main(parent, clusterId, cluster) {
  // [START edgecontainer_v1_generated_EdgeContainer_CreateCluster_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent location where this cluster will be created.
   */
  // const parent = 'abc123'
  /**
   *  Required. A client-specified unique identifier for the cluster.
   */
  // const clusterId = 'abc123'
  /**
   *  Required. The cluster to create.
   */
  // const cluster = {}
  /**
   *  A unique identifier for this request. Restricted to 36 ASCII characters. A
   *  random UUID is recommended. This request is only idempotent if
   *  `request_id` is provided.
   */
  // const requestId = 'abc123'

  // Imports the Edgecontainer library
  const {EdgeContainerClient} = require('@google-cloud/edgecontainer').v1;

  // Instantiates a client
  const edgecontainerClient = new EdgeContainerClient();

  async function callCreateCluster() {
    // Construct request
    const request = {
      parent,
      clusterId,
      cluster,
    };

    // Run request
    const [operation] = await edgecontainerClient.createCluster(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateCluster();
  // [END edgecontainer_v1_generated_EdgeContainer_CreateCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
