class {{fieldname}}(models.Field):
    def __init__(self,*args,**kwargs):
        super({{fieldname}},self).__init__(*args,**kwargs)
    
    def db_type(self):
        pass
    def to_python(self, value):
        pass
    def get_db_prep_save(self, value):
        pass
    def pre_save(self, model_instance, add):
        pass
    def get_db_prep_lookup(self, lookup_type, value):
        pass
    def formfield(self, form_class=forms.CharField, **kwargs):
        pass
    def get_internal_type(self):
        pass
    def flatten_data(self, follow, obj=None):
        pass
        
        
