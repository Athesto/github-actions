#!/usr/bin/env python3
from selenium import webdriver
import os

driver = webdriver.Chrome(os.environ['CHROMEWEBDRIVER'])
driver.get("http://www.python.org")
assert "Python" in driver.title
driver.quit()
