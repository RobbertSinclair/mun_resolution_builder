"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include
from rest_framework import routers
from resolution_backend import views

router = routers.DefaultRouter()
router.register("users", views.UserViewSet)
router.register("resolutions", views.ResolutionViewSet)
router.register("clauses", views.ClauseViewSet)
router.register("subclauses", views.SubClauseViewSet)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/get_resolutions', views.GetResolution.as_view()),
    path('api/create-res', views.CreateResolutionView.as_view()),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', include('frontend.urls'))
]
