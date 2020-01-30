.PHONY := tools resolve compile up help

.DEFAULT_GOAL := help

export PROJECT := /Users/keveloper/WebstormProjects/ParentResource
export BUILD := $(PWD)/target

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

start ios:
	cd $(PROJECT)
	npx react-native run-ios


