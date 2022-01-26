// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(workerPool) {
  // [START cloudbuild_v1_generated_CloudBuild_UpdateWorkerPool_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The `WorkerPool` to update.
   *  The `name` field is used to identify the `WorkerPool` to update.
   *  Format: `projects/{project}/locations/{location}/workerPools/{workerPool}`.
   */
  // const workerPool = {}
  /**
   *  A mask specifying which fields in `worker_pool` to update.
   */
  // const updateMask = {}
  /**
   *  If set, validate the request and preview the response, but do not actually
   *  post it.
   */
  // const validateOnly = true

  // Imports the Cloudbuild library
  const {CloudBuildClient} = require('@google-cloud/cloudbuild').v1;

  // Instantiates a client
  const cloudbuildClient = new CloudBuildClient();

  async function callUpdateWorkerPool() {
    // Construct request
    const request = {
      workerPool,
    };

    // Run request
    const [operation] = await cloudbuildClient.updateWorkerPool(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateWorkerPool();
  // [END cloudbuild_v1_generated_CloudBuild_UpdateWorkerPool_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
