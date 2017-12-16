// Copyright 2017, Google LLC All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const bigqueryDataTransfer = require('../src');

if (
  !process.env.GCLOUD_PROJECT ||
  !process.env.GOOGLE_APPLICATION_CREDENTIALS
) {
  throw new Error(
    'Usage: GCLOUD_PROJECT=<project_id> GOOGLE_APPLICATION_CREDENTIALS=<path to key json file> node #{$0}'
  );
}
var projectId = process.env.GCLOUD_PROJECT;

var client = new bigqueryDataTransfer.v1.DataTransferServiceClient({
  // optional auth parameters.
});

// Iterate over all elements.
var formattedParent = client.locationPath(projectId, 'us-central1');

client.listDataSources({parent: formattedParent}).then(responses => {
  var resources = responses[0];
  for (let i = 0; i < resources.length; i += 1) {
    console.log(resources[i]);
  }
});

var options = {autoPaginate: false};
var callback = responses => {
  // The actual resources in a response.
  var resources = responses[0];
  // The next request if the response shows that there are more responses.
  var nextRequest = responses[1];
  // The actual response object, if necessary.
  // var rawResponse = responses[2];
  for (let i = 0; i < resources.length; i += 1) {
    console.log(resources[i]);
  }
  if (nextRequest) {
    // Fetch the next page.
    return client.listDataSources(nextRequest, options).then(callback);
  }
};
client.listDataSources({parent: formattedParent}, options).then(callback);

client.listDataSourcesStream({parent: formattedParent}).on('data', element => {
  console.log(element);
});
