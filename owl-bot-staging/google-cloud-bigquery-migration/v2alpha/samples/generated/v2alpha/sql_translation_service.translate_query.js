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

function main(parent, sourceDialect, query) {
  // [START bigquerymigration_v2alpha_generated_SqlTranslationService_TranslateQuery_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the project to which this translation request belongs.
   *  Example: `projects/foo/locations/bar`
   */
  // const parent = 'abc123'
  /**
   *  Required. The source SQL dialect of `queries`.
   */
  // const sourceDialect = {}
  /**
   *  Required. The query to be translated.
   */
  // const query = 'abc123'

  // Imports the Migration library
  const {SqlTranslationServiceClient} = require('@google-cloud/bigquery-migration').v2alpha;

  // Instantiates a client
  const migrationClient = new SqlTranslationServiceClient();

  async function callTranslateQuery() {
    // Construct request
    const request = {
      parent,
      sourceDialect,
      query,
    };

    // Run request
    const response = await migrationClient.translateQuery(request);
    console.log(response);
  }

  callTranslateQuery();
  // [END bigquerymigration_v2alpha_generated_SqlTranslationService_TranslateQuery_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
