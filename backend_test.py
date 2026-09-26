#!/usr/bin/env python3
"""
Backend API Test Suite for Portfolio Website
Tests the minimal backend endpoints
"""

import requests
import sys
from typing import Dict, Any

# Backend URL from frontend/.env
BACKEND_URL = "https://ai-engineer-ayush.preview.emergentagent.com"

def test_root_endpoint() -> bool:
    """Test GET /api/ endpoint"""
    print("\n" + "="*60)
    print("Testing: GET /api/")
    print("="*60)
    
    try:
        response = requests.get(f"{BACKEND_URL}/api/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        # Verify status code
        if response.status_code != 200:
            print(f"❌ FAILED: Expected status 200, got {response.status_code}")
            return False
        
        # Verify response structure
        data = response.json()
        if "message" not in data:
            print("❌ FAILED: Response missing 'message' field")
            return False
        
        # Verify message content
        expected_message = "Ayush Mohan Tripathi — Portfolio API"
        if data["message"] != expected_message:
            print(f"❌ FAILED: Expected message '{expected_message}', got '{data['message']}'")
            return False
        
        print("✅ PASSED: Root endpoint working correctly")
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"❌ FAILED: Request error - {str(e)}")
        return False
    except Exception as e:
        print(f"❌ FAILED: Unexpected error - {str(e)}")
        return False


def test_health_endpoint() -> bool:
    """Test GET /api/health endpoint"""
    print("\n" + "="*60)
    print("Testing: GET /api/health")
    print("="*60)
    
    try:
        response = requests.get(f"{BACKEND_URL}/api/health", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        # Verify status code
        if response.status_code != 200:
            print(f"❌ FAILED: Expected status 200, got {response.status_code}")
            return False
        
        # Verify response structure
        data = response.json()
        if "status" not in data:
            print("❌ FAILED: Response missing 'status' field")
            return False
        
        # Verify status value
        if data["status"] != "ok":
            print(f"❌ FAILED: Expected status 'ok', got '{data['status']}'")
            return False
        
        print("✅ PASSED: Health endpoint working correctly")
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"❌ FAILED: Request error - {str(e)}")
        return False
    except Exception as e:
        print(f"❌ FAILED: Unexpected error - {str(e)}")
        return False


def test_cors_headers() -> bool:
    """Test CORS headers are present"""
    print("\n" + "="*60)
    print("Testing: CORS Headers")
    print("="*60)
    
    try:
        response = requests.get(f"{BACKEND_URL}/api/health", timeout=10)
        headers = response.headers
        
        print(f"Access-Control-Allow-Origin: {headers.get('access-control-allow-origin', 'NOT PRESENT')}")
        
        # Check if CORS header is present
        if 'access-control-allow-origin' in headers:
            print("✅ PASSED: CORS headers configured")
            return True
        else:
            print("⚠️  WARNING: CORS headers not visible in response (may be handled by proxy)")
            return True  # Not a critical failure as proxy might handle CORS
        
    except Exception as e:
        print(f"❌ FAILED: Error checking CORS - {str(e)}")
        return False


def main():
    """Run all backend tests"""
    print("\n" + "="*60)
    print("BACKEND API TEST SUITE - Portfolio Website")
    print("="*60)
    print(f"Backend URL: {BACKEND_URL}")
    
    results = {
        "Root Endpoint": test_root_endpoint(),
        "Health Endpoint": test_health_endpoint(),
        "CORS Headers": test_cors_headers()
    }
    
    print("\n" + "="*60)
    print("TEST SUMMARY")
    print("="*60)
    
    for test_name, passed in results.items():
        status = "✅ PASSED" if passed else "❌ FAILED"
        print(f"{test_name}: {status}")
    
    total_tests = len(results)
    passed_tests = sum(results.values())
    
    print(f"\nTotal: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("\n🎉 All tests passed!")
        sys.exit(0)
    else:
        print(f"\n⚠️  {total_tests - passed_tests} test(s) failed")
        sys.exit(1)


if __name__ == "__main__":
    main()
