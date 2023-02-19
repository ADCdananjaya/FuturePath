from rest_framework import serializers

from users.models import User,Company,Student


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username', 'email', 'is_company']

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model=Company
        fields=['company_name','phone','location','description']



#Serializer For The Company sign
class CompanySignupSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={"input_type":"password"}, write_only=True)
    class Meta:
        model=User
        fields=['username','email','password', 'password2',]
        extra_kwargs={
            'password':{'write_only':True}
        }
    
    def save(self, **kwargs):
        user=User(
            username=self.validated_data['username'],
            email=self.validated_data['email']
        )
        password=self.validated_data['password']
        password2=self.validated_data['password2']
        if password !=password2:
            raise serializers.ValidationError({"error":"password do not match"})
        user.set_password(password)
        user.is_company = True
        user.save()
        Company.objects.create(user=user)
        return user


#Serializer For The Student sign
class StudentSignupSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={"input_type":"password"}, write_only=True)
    class Meta:
        model=User
        fields=['username','email','password', 'password2']
        extra_kwargs={
            'password':{'write_only':True}
        }
    

    def save(self, **kwargs):
        user=User(
            username=self.validated_data['username'],
            email=self.validated_data['email']
        )
        password=self.validated_data['password']
        password2=self.validated_data['password2']
        if password !=password2:
            raise serializers.ValidationError({"error":"password do not match"})
        user.set_password(password)
        user.is_student = True
        user.save()
        Student.objects.create(user=user)
        return user

#Display Company Details
class CompanyDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Company
        fields=['company_name','phone','location','description']

#Display Student Details
class StudentDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields=['skill']


#Display
class CurrentUserSerializer(serializers.ModelSerializer):

    jobs = serializers.StringRelatedField(many=True)

    class Meta:
         model=Company
         fields=['jobs']