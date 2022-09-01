#!/usr/bin/env bash


export DIFF=0
export UPDATE=1
export SWC_CHECK=0
export SWC_RUN=0

cargo test -p swc_ecma_minifier --release -p swc --no-fail-fast --features concurrent

# find ../swc/tests/ -type f -empty -delete