#!/usr/bin/env python3
from selenium import webdriver
driver = webdriver.Chrome()
driver.get("http://www.python.org")
assert "Python" in driver.title
driver.quit()
