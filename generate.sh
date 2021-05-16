# typescript-node js docs
openapi-generator-cli generate -g typescript-node -p "npmName=@key-connect/api,npmRepository=key-connect/sdkjs" -o . -i C:\Users\Manthan\IdeaProjects\gitlab.com\turinglabs\keyconnect\keyconnect-api\src\main\resources\api.yaml

# ascii doc documentation
openapi-generator-cli generate -g asciidoc -o . -i C:\Users\Manthan\IdeaProjects\gitlab.com\turinglabs\keyconnect\keyconnect-api\src\main\resources\api.yaml

mv index.adoc readme.adoc
