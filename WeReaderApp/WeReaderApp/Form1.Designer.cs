namespace WeReaderApp
{
    partial class uxLoginForm
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(uxLoginForm));
            this.uxWelcLabel = new System.Windows.Forms.Label();
            this.uxWRLabel = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // uxWelcLabel
            // 
            this.uxWelcLabel.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.uxWelcLabel.AutoSize = true;
            this.uxWelcLabel.Font = new System.Drawing.Font("Cambria", 18F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.uxWelcLabel.ForeColor = System.Drawing.Color.MediumPurple;
            this.uxWelcLabel.Location = new System.Drawing.Point(116, 8);
            this.uxWelcLabel.Name = "uxWelcLabel";
            this.uxWelcLabel.Size = new System.Drawing.Size(140, 28);
            this.uxWelcLabel.TabIndex = 0;
            this.uxWelcLabel.Text = "Welcome to";
            this.uxWelcLabel.TextAlign = System.Drawing.ContentAlignment.TopCenter;
            // 
            // uxWRLabel
            // 
            this.uxWRLabel.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.uxWRLabel.AutoSize = true;
            this.uxWRLabel.Font = new System.Drawing.Font("Cambria", 36F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.uxWRLabel.ForeColor = System.Drawing.Color.MediumPurple;
            this.uxWRLabel.Location = new System.Drawing.Point(62, 35);
            this.uxWRLabel.Name = "uxWRLabel";
            this.uxWRLabel.Size = new System.Drawing.Size(251, 57);
            this.uxWRLabel.TabIndex = 1;
            this.uxWRLabel.Text = "WeReader";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(0, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(39, 14);
            this.label1.TabIndex = 2;
            this.label1.Text = "label1";
            // 
            // uxLoginForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 14F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Ivory;
            this.ClientSize = new System.Drawing.Size(379, 420);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.uxWRLabel);
            this.Controls.Add(this.uxWelcLabel);
            this.Font = new System.Drawing.Font("Cambria", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.ForeColor = System.Drawing.Color.MediumPurple;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "uxLoginForm";
            this.Text = "Login";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Label uxWelcLabel;
        private Label uxWRLabel;
        private Label label1;
    }
}