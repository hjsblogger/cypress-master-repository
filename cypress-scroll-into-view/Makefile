# Define variables
NPM := npm
CYPRESS_DIR := demo
CYPRESS_LOCAL_RUN := npx cypress run
CYPRESS_CLOUD_RUN := lambdatest-cypress
PROJECT_NAME := ScrollIntoView Demo with Cypress

.PHONY: install
install:
	cd $(CYPRESS_DIR)
	$(NPM) install
	@echo "Set env vars LT_USERNAME & LT_ACCESS_KEY"
    # Procure Username and AccessKey from https://accounts.lambdatest.com/security
	export LT_USERNAME= $(LT_USERNAME)
	export LT_ACCESS_KEY= $(LT_ACCESS_KEY)

.PHONY: test
test:
    export NODE_ENV = test

.PHONY: test
local-scroll-into-view-cypress:
	@echo "CYPRESS_DIR: $(CYPRESS_DIR)"
	@echo "CYPRESS_LOCAL_RUN: $(CYPRESS_LOCAL_RUN)"
	- cd $(CYPRESS_DIR) && $(CYPRESS_LOCAL_RUN) --browser chrome --headed

cloud-scroll-into-view-cypress:
	@echo "CYPRESS_DIR: $(CYPRESS_DIR)"
	@echo "CYPRESS_CLOUD_RUN: $(CYPRESS_CLOUD_RUN)"
	- cd $(CYPRESS_DIR) && $(CYPRESS_CLOUD_RUN) run

.PHONY: clean
clean:
    # This helped: https://gist.github.com/hbsdev/a17deea814bc10197285
	find . -type f \( -name "*.mp4" -o -name "*.zip" \) -exec rm -rf {} +
	@echo "Clean Succeeded"

.PHONY: distclean
distclean: clean
	rm -rf venv

.PHONY: help
help:
	@echo ""
	@echo "install : Install project dependencies"
	@echo "clean : Clean up temp files"
	@echo "local-scroll-into-view-cypress : ScrollIntoView Demo with Cypress on local machine"
	@echo "cloud-scroll-into-view-cypress : ScrollIntoView Demo with Cypress on LambdaTest cloud grid"