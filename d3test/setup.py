#!/usr/bin/env python
# -*- coding: utf-8 -*-
try:
    from setuptools import setup, find_packages
except ImportError:
    from ez_setup import use_setuptools
    use_setuptools()
    from setuptools import setup

setup(
    name='d3test',
    version='0.1dev',
    description='',
    author='',
    author_email='',
    url='',
    #long_description=open('README.rst', 'r').read(),
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    requires=[
        # TODO
    ],
    classifiers=[
        'Development Status :: 4 - Beta',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Utilities'
    ],
    entry_points = {
        'console_scripts': [
            'd3test-wsgi = d3test.d3test.runner:wsgi',
            'd3test-websockets = d3test.d3test.runner:websockets'
        ]
    }
)
