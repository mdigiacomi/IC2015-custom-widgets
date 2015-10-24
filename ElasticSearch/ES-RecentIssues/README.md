ElasticSearch Recent Issues Widget




endpoint : http://localhost:9200/logstash*/_search?search_type=count
Request Type: Get
Michael Di Giacomi
4:05 PM
payload?
Alexander Wong
4:06 PM
Json Payload: { "aggregations": { "Applications" : { "terms" : { "field" : "AppName.raw" } }, "Groups" : { "terms" : { "field" : "Execution.raw" }}}}